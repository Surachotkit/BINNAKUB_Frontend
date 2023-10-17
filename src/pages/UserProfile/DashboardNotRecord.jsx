import Norecord from "../../img/not_record.png";
export default function DashboardNotRecord() {
  return (
    <div className="flex w-full h-[75vh] justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full h-[20rem]">
        <img src={Norecord} alt="No_record" className="flex w-72" />
        <span className="text-gray-500">No records found.</span>
      </div>
    </div>
  );
}
