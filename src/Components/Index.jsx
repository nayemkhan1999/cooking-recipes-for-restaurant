const Index = ({ order, handleRemove, cooking, handleCooking }) => {
  return (
    <div className="text-center font-lexend ">
      <h1 className="text-2xl font-bold bgre">Want to cook: {order.length}</h1>
      <div className="divider divider-start"></div>
      <div className="overflow-x-auto">
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {order.map((cook, index) => (
                <tr className="bg-base-200 divide-y-2" key={cook.ind}>
                  <th>{index + 1}</th>
                  <td>{cook.name}</td>
                  <td>{cook.preparing_time} minutes</td>
                  <td>{cook.calories}calories</td>
                  <button
                    onClick={() => {
                      handleRemove(cook.id);
                      handleCooking(cook);
                    }}
                    className="bg-rose-500  text-white font-medium text-xs rounded-full px-2 py-2 mt-3 "
                  >
                    preparing
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h1 className="text-2xl font-bold bgre mt-10 border-y-2 py-4">
          Currently cooking: {cooking.length}
        </h1>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody>
                {cooking.map((show, index) => (
                  <tr key={show.ind} className="bg-base-200">
                    <th>{index + 1}</th>
                    <td>{show.name}</td>
                    <td>{show.preparing_time} minutes</td>
                    <td>{show.calories} calories</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
