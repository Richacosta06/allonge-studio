import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Esquema de validación con Zod
const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("Debe ser un correo válido"),
  phone: z.string().optional(),
  message: z.string().min(1, "El mensaje es obligatorio"),
});

const ReactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    alert("Mensaje enviado con éxito");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-[#c0a062] focus:border-[#c0a062]"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-[#c0a062] focus:border-[#c0a062]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300"
        >
          Teléfono (Opcional)
        </label>
        <input
          type="tel"
          id="phone"
          {...register("phone")}
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-[#c0a062] focus:border-[#c0a062]"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          {...register("message")}
          rows="4"
          className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-white focus:outline-none focus:ring-[#c0a062] focus:border-[#c0a062]"
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      <div>
        <button type="submit" className="w-full btn-glam hover-effect">
          Enviar Mensaje
        </button>
      </div>
    </form>
  );
};

export default ReactForm;
