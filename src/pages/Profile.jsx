import ExampleProfile from "../components/example-profile";

function ProfilePage() {
  return (
    <>
      <ExampleProfile />

      <div className="bg-blue-200 p-4">
      <h1 className="text-2xl font-bold text-blue-600">Hello Tailwind CSS!</h1>
      <p className="mt-2 text-gray-700">Welcome to your Tailwind CSS powered React app.</p>
    </div>
    </>
  );
}

export default ProfilePage;
