

const ingresar = async (req, res) => {
  try {
    const {
      hhcc,
      dni,
      nombre,
      sexo,
      AreaQXInit,
      AreaQXOut,
      QuirofanoInit,
      QuirofanoOut,
      CirugiaInit,
      CirugiaOut,
      PulseraChk,
      ConsentimientoChk,
      AyunoChk,
      MarcapasosChk,
      AccesoriosChk,
      IgieneChk,
      HHCCCPapelChk,
      EstudiosComplementariosChk,
      AlergiaChk,
      AlergiaChkAQue,
      EquipamientoChk,
      EquipamientoOtros,
      ApoyoChk,
      ApoyoOtros,
      TipoCirugiaChk,
      ProcedenciaChk,
      AnestesiaChk,
      QuirofanoChk,
      CultivoChk,
      AnatomiaChk,
      ImplantesChk,
      ImplantesOtros,
      DrenajeChk,
      DrenajeOtros,
      conteoInstrumentalChk,
      conteoCortoPunzantesChk,
      conteoGasasChk,
      PulseraOutChk,
      ServicioIntervinienteChk,
      destinoPacienteChk,
      SuspensionChk,
      SuspensionOtros,
      cirugiaRealizada,
    } = req.body;

    res.status(201).json({
        status: success,
        data: {
            
        }
    });
  } catch (error) {
    res.status(404).send(error);
  }
};
