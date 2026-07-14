"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Slide = {
  id: string;
  image: string;
  link: string;
};

export default function AdminBannersPage() {
  const router = useRouter();
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [newLink, setNewLink] = useState("");
  const [dirty, setDirty] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const notify = (msg: string) => {
    setMessage(msg);
    setError("");
    setTimeout(() => setMessage(""), 4000);
  };

  const fail = (msg: string) => {
    setError(msg);
    setMessage("");
  };

  const handleUnauthorized = (res: Response) => {
    if (res.status === 401) {
      router.push("/admin/login");
      return true;
    }
    return false;
  };

  useEffect(() => {
    fetch("/api/admin/banners")
      .then(async (res) => {
        if (handleUnauthorized(res)) return;
        const data = await res.json();
        setSlides(data.slides || []);
      })
      .catch(() => fail("No se pudieron cargar los banners"))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    const file = fileInputRef.current?.files?.[0];
    if (!file) {
      fail("Selecciona una imagen");
      return;
    }
    setUploading(true);
    setError("");
    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("link", newLink);
      const res = await fetch("/api/admin/banners", {
        method: "POST",
        body: formData,
      });
      if (handleUnauthorized(res)) return;
      const data = await res.json();
      if (!res.ok) {
        fail(data?.message || "Error al subir el banner");
        return;
      }
      setSlides(data.slides);
      setNewLink("");
      if (fileInputRef.current) fileInputRef.current.value = "";
      notify("Banner agregado");
    } catch {
      fail("Error de conexión");
    } finally {
      setUploading(false);
    }
  };

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= slides.length) return;
    const next = [...slides];
    [next[index], next[target]] = [next[target], next[index]];
    setSlides(next);
    setDirty(true);
  };

  const updateLink = (index: number, link: string) => {
    const next = [...slides];
    next[index] = { ...next[index], link };
    setSlides(next);
    setDirty(true);
  };

  const handleSave = async () => {
    setSaving(true);
    setError("");
    try {
      const res = await fetch("/api/admin/banners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slides: slides.map(({ id, link }) => ({ id, link })),
        }),
      });
      if (handleUnauthorized(res)) return;
      const data = await res.json();
      if (!res.ok) {
        fail(data?.message || "Error al guardar");
        return;
      }
      setSlides(data.slides);
      setDirty(false);
      notify("Cambios guardados");
    } catch {
      fail("Error de conexión");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Eliminar este banner?")) return;
    setError("");
    try {
      const res = await fetch(`/api/admin/banners?id=${id}`, {
        method: "DELETE",
      });
      if (handleUnauthorized(res)) return;
      const data = await res.json();
      if (!res.ok) {
        fail(data?.message || "Error al eliminar");
        return;
      }
      setSlides(data.slides);
      notify("Banner eliminado");
    } catch {
      fail("Error de conexión");
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Banners del carrusel</h1>
        <button
          onClick={handleLogout}
          className="rounded border border-gray-300 px-4 py-2 text-sm hover:bg-gray-100"
        >
          Cerrar sesión
        </button>
      </div>

      <nav className="mb-8 flex gap-2 border-b border-gray-200 pb-3">
        <Link
          href="/admin/banners"
          className="rounded bg-black px-4 py-2 text-sm text-white"
        >
          Banners del carrusel
        </Link>
        <Link
          href="/admin/eventos"
          className="rounded px-4 py-2 text-sm hover:bg-gray-100"
        >
          Eventos
        </Link>
      </nav>

      <form
        onSubmit={handleUpload}
        className="mb-10 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
      >
        <h2 className="mb-4 text-lg font-medium">Agregar banner</h2>
        <div className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium">
              Imagen (JPG, PNG o WebP — horizontal, mín. 1920px de ancho)
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="w-full text-sm"
              required
            />
          </div>
          <div className="flex-1">
            <label className="mb-1 block text-sm font-medium">
              Link del botón &quot;Saber más&quot;
            </label>
            <input
              type="text"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              placeholder="/car/BYDSHARK"
              className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
              required
            />
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="rounded bg-black px-6 py-2 text-white transition-opacity hover:opacity-80 disabled:opacity-50"
          >
            {uploading ? "Subiendo..." : "Agregar"}
          </button>
        </div>
      </form>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {message && <p className="mb-4 text-sm text-green-600">{message}</p>}

      {loading ? (
        <p className="text-gray-500">Cargando...</p>
      ) : slides.length === 0 ? (
        <p className="rounded border border-dashed border-gray-300 p-6 text-center text-gray-500">
          No hay banners personalizados. La página está mostrando los banners
          por defecto. Sube al menos uno para reemplazarlos.
        </p>
      ) : (
        <>
          <ul className="flex flex-col gap-4">
            {slides.map((slide, index) => (
              <li
                key={slide.id}
                className="flex flex-col gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={`Banner ${index + 1}`}
                  className="h-24 w-44 rounded object-cover"
                />
                <div className="flex-1">
                  <label className="mb-1 block text-xs font-medium text-gray-500">
                    Link
                  </label>
                  <input
                    type="text"
                    value={slide.link}
                    onChange={(e) => updateLink(index, e.target.value)}
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => move(index, -1)}
                    disabled={index === 0}
                    title="Subir"
                    className="rounded border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 disabled:opacity-30"
                  >
                    ↑
                  </button>
                  <button
                    onClick={() => move(index, 1)}
                    disabled={index === slides.length - 1}
                    title="Bajar"
                    className="rounded border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100 disabled:opacity-30"
                  >
                    ↓
                  </button>
                  <button
                    onClick={() => handleDelete(slide.id)}
                    className="rounded border border-red-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Eliminar
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSave}
              disabled={!dirty || saving}
              className="rounded bg-black px-6 py-2 text-white transition-opacity hover:opacity-80 disabled:opacity-40"
            >
              {saving ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </>
      )}
    </main>
  );
}
