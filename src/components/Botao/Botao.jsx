import './Botao.css'

interface IButton {
  titulo: string,
  onClick: MouseEventHandler
}

export const Botao = ({titulo, onClick}: IButton) => {
  return (
    <div className='botao'>
      <button onClick={onClick}>{titulo}</button>
    </div>
  );
}
