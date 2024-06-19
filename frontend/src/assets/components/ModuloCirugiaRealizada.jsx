import React, { useContext } from "react";
import { inputContext } from "../providers/inputDataProvider";

const ModuloCirugiaRealizada = (props) => {

  const {
    register,
    formState: { errors },
  } = useContext(inputContext);

  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded cirugiaRealizada ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows="3"
          id="floatingTextarea"          
          {...register("cirugiaRealizada", {
                  required: {
                    value: true,
                    message: "Debe expecificar la cirugia realizada",
                  },
                })}
        ></textarea>
        {errors.cirugiaRealizada && (
        <span className="text-danger">{errors.cirugiaRealizada.message}</span>
      )}
      </div>
    </section>
  );
};

export default ModuloCirugiaRealizada;
