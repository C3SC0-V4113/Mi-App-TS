import { useForm } from "../hooks";

interface FormData {
  email: string;
  name: string;
  age: number;
}

export const Formulario = () => {
  const initState = {
    email: "frankjose00@gmail.com",
    name: "Francisco",
    age: 35,
  };

  const { form, handleChange } = useForm<FormData>(initState);

  const { email, age, name } = form;

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label className="form-label">Nombre:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label className="form-label">Edad:</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={age}
          onChange={handleChange}
        />
      </div>

      <pre>{JSON.stringify(form)}</pre>
    </form>
  );
};
