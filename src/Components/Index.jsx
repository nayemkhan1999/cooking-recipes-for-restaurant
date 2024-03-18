const Index = ({ order }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold bgre">Want to cook: 01</h1>
      <div className="divider divider-start"></div>
      <div className="overflow-x-auto">
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>name</th>
                <th>Time</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {order.map((cook,index) => (
                <tr className="bg-base-200 divide-y-2" key={cook.ind}>
                  <th>{index+1}</th>
                  <td>{cook.name}</td>
                  <td>{cook.preparing_time} minutes</td>
                  <td>{cook.calories}calories</td>
                  <button className="bg-info border-2 text-white font-bold rounded-full px-2 py-2 mt-2">
                    preparing
                  </button>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
