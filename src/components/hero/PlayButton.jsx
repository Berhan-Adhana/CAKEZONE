const PlayButton = () => {
  return (
    <div className="flex gap-x-6 items-center">
      <button className=" btn-play relative block box-content w-4 h-[26px] border-none outline-none pt-[18px] pr-5 pb-5 pl-7 bg-white rounded-full ">
        <span className="block relative w-2 h-2 -left-[1px] border-l-[11px] border-l-primary border-t-[11px] border-t-transparent border-b-[11px] z-[99] border-b-transparent" />
      </button>
      <h5 className="font-[500] font-oswald text-white text-[1.25rem] cursor-pointer hidden md:block">
        Play Video
      </h5>
    </div>
  );
};

export default PlayButton;
