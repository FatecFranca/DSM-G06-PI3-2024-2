export const formatarNumero = (numero: string): string => {
    
    const numeroSemFormatacao = numero.replace(/\D/g, "");
    
    return numeroSemFormatacao.startsWith("55")
      ? `+${numeroSemFormatacao}`
      : `+55${numeroSemFormatacao}`;
  };
  