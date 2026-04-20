const ModalOverlay = ({handleClose}) => {
    console.log(handleClose)
  return (
    <div className="flex flex-col justify-center items-center w-[50vh] h-[20vh] px-20px py-10px bg-red-200 absolute text-red-600">
      <button 
        className="absolute top-[4px] right-[20px] cursor-pointer"
        onClick={handleClose}>
        X
      </button>
      <h2>Warning!!</h2>
      <p>Are you sure to delete?</p>
    </div>
  );
};
export default ModalOverlay;
