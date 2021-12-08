export default function Technologies() {
  return (
    <div className="container mt-16 " id="technologies">
      <h2 className="headingStyle">Technologies:</h2>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10  mt-6">
        <div className="bg-gray-900 rounded-3xl p-3">
          <h3 className="whitespace-normal text-3xl font-normal text-gray-300 ">
            Front End
          </h3>
          <p className="text-lg text-gray-400 leading-6 tracking-wide py-2">
            Html Css Js(...)
            <br /> Bootstrap Tailwind Material Ui <br /> ReactJs - Redux- NextJs
            <br />
            VueJs -Vuex <br />
            Sass
          </p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-3">
          <h3 className="text-3xl font-normal text-gray-300 ">Back End</h3>
          <p className="text-lg text-gray-400 leading-6 tracking-wide py-2">
            Firebase <br />
          </p>
        </div>
        <div className="bg-gray-900 rounded-3xl p-3">
          <h3 className="whitespace-normal text-3xl font-normal text-gray-300 ">
            Other
          </h3>
          <p className="text-lg text-gray-400 leading-6 tracking-wide py-2">
            GitHub <br /> CLI (Cmder) <br />
          </p>
        </div>
      </div>
    </div>
  );
}
