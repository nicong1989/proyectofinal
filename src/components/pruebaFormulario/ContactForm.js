import { useForm } from "./useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  email: "",

};

const validationsForm = (form) => {
  let errors = {};
  //Válidación de errores, expresión regular para aceptar letras mayusculas, minusculas y espacios
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  //Válidación de e-mail
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

  //Analiza el name y email del campo y arroja el error declarado
  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }


  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "rgb(57, 255, 20)",
  textShadow: "4px 4px 6px #000000",

};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  return (
    <div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input style={{ marginTop: '1rem', marginBottom: '1rem', minWidth: '250px', }}
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input style={{ marginBottom: '1rem', minWidth: '250px' }}
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}

        <input type="submit" value="SUSCRIBIRSE" style={{ width: '102px', backgroundColor: 'rgb(57, 255, 20)', border: 'none', color: '#ffff',textShadow: "4px 4px 6px #000000"}} />
      </form>
      {loading && <Loader />}
      {response && (
        <Message msg="Los datos han sido enviados" bgColor="#198754" />
      )}
    </div>
  );
};

export default ContactForm;
