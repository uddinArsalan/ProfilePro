import TabNavigation from "./TabNavigation";
import ImageGallery from "./ImageGallery";

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-[#25292E]">

      <div className="md:w-1/2 hidden md:block"></div>
      
     
      <div className="w-full md:w-1/2 p-6 space-y-6">

        <TabNavigation />
        <ImageGallery />
      </div>
    </div>
  );
};

export default ProfilePage;