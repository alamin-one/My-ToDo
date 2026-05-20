const DashboardStats = ({ className, label = 'Total', totalCount = 1 }) => {
  return (
    <div
      className={`w-full p-4 text-center border  hover:border-HEADING/50 rounded-xl ${className}`}
    >
      <h2 className="text-green-400 text-3xl  md:text-4xl font-bold">
        {totalCount}
      </h2>
      <p className="ps mt-2">{label}</p>
    </div>
  );
};

export default DashboardStats;
