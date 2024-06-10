import React from "react";

const ModuloQuirofano = (props) => {
  return (
    <section className="row shadow-lg p-3 mb-2 bg-body-tertiary rounded ">
      <div className="title mb-2">
        <h2 className="text-center">{props.titulo}</h2>
      </div>
      <div className="row justify-content-evenly">
        <div className="card text-center col-md-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkA"
                value={"A"}
                
              />
              <label className="form-check-label" htmlFor="QuirofanoChkA">
              A
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkB"
                value={"B"}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkB">
              B
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkC"
                value={"C"}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkC">
              C
              </label>
            </div>
          </div>          
        </div>
        <div className="card text-center col-md-3">
          <div className="card-body">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkD"
                value={"D"}
                
              />
              <label className="form-check-label" htmlFor="QuirofanoChkD">
              D
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkE"
                value={"E"}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkE">
              E
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkF"
                value={"F"}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkF">
              F
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="QuirofanoChk"
                id="QuirofanoChkMaternidad"
                value={"Maternidad"}
              />
              <label className="form-check-label" htmlFor="QuirofanoChkMaternidad">
              Maternidad
              </label>
            </div>
          </div>          
        </div>
      </div>
    </section>
  );
};

export default ModuloQuirofano;
