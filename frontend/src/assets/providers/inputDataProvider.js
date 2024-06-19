import { createContext } from "react";
import { useForm } from "react-hook-form";
export const inputContext = createContext();

const InputDataProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      hhcc: "",
      dni: "",
      nombre: "",
      sexo: "",
      AreaQXInit: "",
      AreaQXOut: "",
      QuirofanoInit: "",
      QuirofanoOut: "",
      CirugiaInit: "",
      CirugiaOut: "",
      PulseraChk: "",
      ConsentimientoChk: "",
      AyunoChk: "",
      MarcapasosChk: "",
      AccesoriosChk: [],
      IgieneChk: "",
      HHCCCPapelChk: "",
      EstudiosComplementariosChk: "",
      AlergiaChk: "",
      AlergiaChkAQue: "",
      EquipamientoChk: [],
      EquipamientoOtros: "",
      ApoyoChk: [],
      ApoyoOtros: "",
      TipoCirugiaChk:"",
      ProcedenciaChk: [],
      AnestesiaChk: "",
      QuirofanoChk: "",
      CultivoChk: "",
      AnatomiaChk: "",
      ImplantesChk: [],
      ImplantesOtros: "",
      DrenajeChk: [],
      DrenajeOtros: "",
      conteoInstrumentalChk: "",
      conteoCortoPunzantesChk: "",
      conteoGasasChk: "",
      PulseraOutChk: "",
      ServicioIntervinienteChk: "",
      destinoPacienteChk: "",
      SuspensionChk: [],
      SuspensionOtros: "",
      cirugiaRealizada: "",
    },
  });

  return (
    <inputContext.Provider
      value={{
        register,
        handleSubmit,
        formState: { errors },
        watch,
      }}
    >
      {children}
    </inputContext.Provider>
  );
};

export default InputDataProvider;
