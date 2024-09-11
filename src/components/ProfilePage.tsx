import TabNavigation from "./TabNavigation";
import ImageGallery from "./ImageGallery";

const ProfilePage = () => {
  return (
    <div className="flex min-h-screen bg-[#25292E]">
      {/* Empty left half */}
      <div className="md:w-1/2 hidden md:block"></div>
      
      {/* Right half with content */}
      <div className="w-full md:w-1/2 p-6 space-y-6">
        {/* Tab Widget */}
        <TabNavigation />

        {/* Image Gallery */}
        <ImageGallery />
      </div>
    </div>
  );
};

export default ProfilePage;