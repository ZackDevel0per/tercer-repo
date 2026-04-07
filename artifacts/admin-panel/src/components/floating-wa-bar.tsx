import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const BUTTONS = [
  {
    command: "demos",
    label: "Demo",
    icon: "https://i.postimg.cc/YC332RmL/demo.png",
  },
  {
    command: "segundoPlano",
    label: "Botones",
    icon: "https://i.postimg.cc/9Fcb6sDH/BOTONES.png",
  },
  {
    command: "ClientesInfo",
    label: "Clientes Info",
    icon: "https://i.postimg.cc/k4w6KRwG/clientesinfo.png",
  },
  {
    command: "contactos",
    label: "Contactos",
    icon: "https://i.postimg.cc/3WQymszr/Agregar-Contacto.png",
  },
  {
    command: "reales",
    label: "Crear Cuenta",
    icon: "https://i.postimg.cc/yxXcN6rX/Crear-Cuenta.png",
  },
  {
    command: "info",
    label: "Resellers",
    icon: "https://i.postimg.cc/3NNXRQmk/resellers.png",
  },
  {
    command: "download",
    label: "Enviar Reseller",
    icon: "https://i.postimg.cc/0NKrSz3d/enviar-RESELLER.png",
  },
  {
    command: "leerId",
    label: "Leer ID",
    icon: null,
  },
  {
    command: "CopiarClientes",
    label: "Enviar Cliente",
    icon: "https://i.postimg.cc/fyNvpnXp/enviarcliente.png",
  },
  {
    command: "Creditos",
    label: "Créditos",
    icon: "https://i.postimg.cc/FKJPwXxK/mastv-creditos.png",
  },
];

export function FloatingWaBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center"
      style={{ userSelect: "none" }}
    >
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, x: 60, scaleX: 0.7 }}
            animate={{ opacity: 1, x: 0, scaleX: 1 }}
            exit={{ opacity: 0, x: 60, scaleX: 0.7 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="flex flex-col items-center gap-1 mb-1 origin-right"
          >
            {BUTTONS.map((btn) => (
              <motion.button
                key={btn.command}
                whileHover={{ scale: 1.12, x: -4 }}
                whileTap={{ scale: 0.95 }}
                title={btn.label}
                className="relative group flex items-center justify-center rounded-xl shadow-lg transition-all"
                style={{
                  width: 46,
                  height: 46,
                  background: "#091b29",
                  border: "1.5px solid rgba(7,218,131,0.18)",
                }}
              >
                {btn.icon ? (
                  <img
                    src={btn.icon}
                    alt={btn.label}
                    className="w-7 h-7 object-contain rounded"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                ) : (
                  <Search size={20} className="text-white" />
                )}
                <span
                  className="pointer-events-none absolute right-full mr-2 whitespace-nowrap rounded-lg px-2 py-1 text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-xl"
                  style={{ background: "#091b29", border: "1px solid rgba(7,218,131,0.25)" }}
                >
                  {btn.label}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setExpanded((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.93 }}
        title={expanded ? "Cerrar barra" : "Abrir barra de botones"}
        className="flex items-center justify-center rounded-l-2xl shadow-2xl transition-all"
        style={{
          width: 46,
          height: 46,
          background: "#07da83",
          boxShadow: "0 4px 24px 0 rgba(7,218,131,0.35)",
        }}
      >
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="text-[#091b29] font-black text-xl leading-none flex items-center justify-center"
          style={{ lineHeight: 1 }}
        >
          {expanded ? "›" : "‹"}
        </motion.span>
      </motion.button>
    </div>
  );
}
