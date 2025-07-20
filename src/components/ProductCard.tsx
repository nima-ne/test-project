

export default function ProductCard({ product }: any) {
  return (
    <div className="flex flex-col justify-between bg-[#2b2b2b] w-full h-72 rounded-lg shadow-lg p-4 box-border transition-transform hover:scale-105 md:hover:scale-[103%] md:relative md:overflow-hidden group">
      {/* تصویر */}
      <div className="flex justify-center mb-2">
        <img
          src={product.image}
          alt={product.title}
          className="w-[80px] h-[80px] object-contain"
        />
      </div>
      
      {/* عنوان */}
      <h2 className="text-white text-center font-semibold text-sm truncate" title={product.title}>
        {product.title}
      </h2>
      
      {/* رتبه و تعداد */}
      <div className="flex justify-around text-white text-xs mt-2">
        <div className="flex flex-col items-center">
          <span className="font-semibold">Rate:</span> {product.rating.rate}
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Count:</span> {product.rating.count}
        </div>
      </div>
      
      {/* توضیحات کوتاه */}
      <div className="mt-2 flex-1 overflow-hidden  md:absolute md:bg-blue-950 md:opacity-90 bottom-[-289px] md:w-[100%] md:h-[100%] md:rounded-lg md:left-0 md:p-[20px] md:group-hover:bottom-0 md:duration-500">
        <p className="text-white text-xs truncate md:text-wrap md:text-center md:max-h-[80%]" title={product.description}>
          {product.description}
        </p>
              <button className="mt-3 bg-cyan-500 rounded-lg px-4 py-2 text-white font-bold hover:bg-green-500 transition-colors duration-300 mx-auto cursor-pointer hidden md:block">
        buy
      </button>
      </div>
      
      {/* قیمت */}
      <div className="mt-2 text-center text-white font-semibold text-sm">
        ${product.price}
      </div>
      
      {/* دکمه */}
      <button className="mt-3 bg-cyan-500 rounded-lg px-4 py-2 text-white font-bold hover:bg-green-500 transition-colors duration-300 mx-auto cursor-pointer md:hidden">
        buy
      </button>
    </div>
  );
}