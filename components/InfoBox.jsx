import Link from "next/link";

const InfoBox = (props) => {
  const value = props.text;
  const styles = props.style;
  
  return (
    <>
      <div className={`${styles.bg} p-6 rounded-lg shadow-md`}>
        <h2 className="text-2xl font-bold">{value.title}</h2>
        <p className="mt-2 mb-4">
          {value.desc}
        </p>
        <Link
          className={`inline-block ${styles.btn} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
          href={value.link}
        >
          {value.btn}
        </Link>
      </div>
    </>
  );
};

export default InfoBox;
