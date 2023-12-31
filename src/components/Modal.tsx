type ModalProps = {
    points: number
    total:number
    onClick: () => void
}

const Modal = ({points, total, onClick}:ModalProps) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <section className="h-fit w-fit bg-white px-10 py-5 rounded-lg flex flex-col items-center gap-3 relative">
            <h2 className="text-2xl text-primary-800 font-semibold">Thank You!</h2>
            <p className="text-lg">Your score:</p>
            <div className="text-secondary-500 w-20 h-20 text-center border-2 border-secondary-500 rounded-full flex flex-col items-center justify-center p-1 font-semibold">
              {points}
              <hr className="h-[3px] w-full bg-secondary-500"/>
              {total}
            </div>
            <button className="absolute top-0 right-2" style={{fontSize:'24px'}} onClick={onClick}>&times;</button>
          </section>
      </div>
  )
}

export default Modal