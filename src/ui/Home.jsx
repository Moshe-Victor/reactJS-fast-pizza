import CreateUser from "../features/user/CreateUser.jsx";
function Home() {
    return (
        <div className="mt-10 text-center mb-10 sm:my-16 px-4ß">
            <h1 className="text-xl font-semibold text-center mb-8 md:text-3xl">
                The best pizza.
                <br/>
                <span className="text-yellow-500">
        Straight out of the oven, straight to you.
              </span>
            </h1>
            <CreateUser/>
        </div>
    );
}

export default Home;
