const Recepes = ({ cart, handleClick }) => {
  const {
    name,
    image,
    description,
    ingredients_length,
    Ingredients,
    preparing_time,
    calories,
  } = cart;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img className="rounded-2xl w-80" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}</h2>
          <p>{description}</p>
          <div className="divider divider-start"></div>
          <p className="text-xl font-bold">Ingredients: 6</p>
          <ul className="list-disc ml-6">
            <li>{Ingredients[0]}</li>
            <li>{Ingredients[1]}</li>
            <li>{Ingredients[2]}</li>
          </ul>
          <div className="divider divider-start"></div>
          <div className="flex items-center justify-around">
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <p>30 minutes</p>
            </div>
            <div className="flex gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
              <p>600 calories</p>
            </div>
          </div>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleClick(cart)}
              className="btn btn-info rounded-full font-medium mt-4 text-lg text-white"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recepes;
