"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DEFAULT_DESKTOP = "https://imagenes.masoft.mx/bydtijuana/web.jpg";
const DEFAULT_MOBILE = "https://imagenes.masoft.mx/bydtijuana/mob.jpg";

export default function AdminEventosPage() {
  const router = useRouter();
  const [imageDesktop, setImageDesktop] = useState<string | null>(null);
  const [imageMobile, setImageMobile] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("/api/admin/eventos")
      .then(async (res) => {
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        setImageDesktop(data.imageDesktop);
        setImageMobile(data.imageMobile);
      })
      .catch(() => setError("No se pudo cargar la información"))
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const desktopFile = desktopInputRef.current?.files?.[0];
    const mobileFile = mobileInputRef.current?.files?.[0];
    if (!desktopFile && !mobileFile) {
      setError("Selecciona al menos una imagen");
      return;
    }
    setUploading(true);
    setError("");
    setMessage("");
    try {
      const formData = new FormData();
      if (desktopFile) formData.append("desktop", desktopFile);
      if (mobileFile) formData.append("mobile", mobileFile);
      const res = await fetch("/api/admin/eventos", {
        method: "POST",
        body: formData,
      });
      if (res.status === 401) {
        router.push("/admin/login");
        return;
      }
      const data = await res.json();
      if (!res.ok) {
        setError(data?.message || "Error al subir");
        return;
      }
      setImageDesktop(data.imageDesktop);
      setImageMobile(data.imageMobile);
      if (desktopInputRef.current) desktopInputRef.current.value = "";
      if (mobileInputRef.current) mobileInputRef.current.value = "";
      setMessage("Imágenes actualizadas");
      setTimeout(() => setMessage(""), 4000);
    } catch {
      setError("Error de conexión");
    } finally {
      setUploading(false);
    }
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Imagen de Eventos</h1>
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
          className="rounded px-4 py-2 text-sm hover:bg-gray-100"
        >
          Banners del carrusel
        </Link>
        <Link
          href="/admin/eventos"
          className="rounded bg-black px-4 py-2 text-sm text-white"
        >
          Eventos
        </Link>
      </nav>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {message && <p className="mb-4 text-sm text-green-600">{message}</p>}

      {loading ? (
        <p className="text-gray-500">Cargando...</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-lg font-medium">
                Imagen de escritorio (horizontal)
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageDesktop || DEFAULT_DESKTOP}
                alt="Imagen actual de eventos (escritorio)"
                className="mb-2 w-full rounded object-cover"
              />
              <p className="mb-3 text-xs text-gray-500">
                {imageDesktop
                  ? "Imagen personalizada"
                  : "Imagen por defecto (servidor externo)"}
              </p>
              <input
                ref={desktopInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="w-full text-sm"
              />
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-3 text-lg font-medium">
                Imagen de celular (vertical)
              </h2>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageMobile || DEFAULT_MOBILE}
                alt="Imagen actual de eventos (celular)"
                className="mx-auto mb-2 w-1/2 rounded object-cover"
              />
              <p className="mb-3 text-xs text-gray-500">
                {imageMobile
                  ? "Imagen personalizada"
                  : "Imagen por defecto (servidor externo)"}
              </p>
              <input
                ref={mobileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="w-full text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={uploading}
              className="rounded bg-black px-6 py-2 text-white transition-opacity hover:opacity-80 disabled:opacity-50"
            >
              {uploading ? "Subiendo..." : "Actualizar imágenes"}
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
