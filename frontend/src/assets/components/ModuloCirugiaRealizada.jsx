import React from "react";

const ModuloCirugiaRealizada = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>

      <div className="form-floating">
        <textarea
          className="form-control"
          id="floatingTextarea"
        ></textarea>
      </div>
    </section>
  );
};

export default ModuloCirugiaRealizada;
