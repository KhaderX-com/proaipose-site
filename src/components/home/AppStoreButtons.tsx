import React from "react";

export function AppStoreButtons() {
    return (
        <div id="download" className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <img
                src="https://res.cloudinary.com/destej60y/image/upload/v1761869890/Store_Google_Play_Type_Dark_Language_English_3x_gcn0ms.png"
                alt="Get it on Google Play"
                className="h-14 w-auto object-contain hover:scale-105 transition-transform cursor-pointer"
            />
            <img
                src="https://res.cloudinary.com/destej60y/image/upload/v1761870592/Store_App_Store_Type_Dark_Language_English_3x_jfcyui.png"
                alt="Download on the App Store"
                className="h-14 w-auto object-contain hover:scale-105 transition-transform cursor-pointer"
            />
        </div>
    );
}
