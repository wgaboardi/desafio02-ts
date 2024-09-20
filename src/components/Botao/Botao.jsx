import './Botao.css'

export const Botao = ({titulo, funcao}) => {
  return (
    <div className='botao'>
      <button onClick={funcao}>{titulo}</button>
    </div>
  );
}
