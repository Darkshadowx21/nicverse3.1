export default function WindowsGuide() {
    return (
      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
            Windows Installation Guide
          </h3>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 bg-gradient-to-r from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-800/30 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
              This Windows installation guide will help you add content to
              Minecraft Bedrock, including Add-Ons, Resource Packs, Worlds, and
              Skin Packs. These items are typically found in file formats like
              .mcaddon, .mcpack, and .mcworld.
            </p>
          </div>
        </section>
  
        <section className="space-y-4">
          <h4 className="text-xl font-medium text-primary-600 dark:text-primary-400">
            Download & Import Process
          </h4>
          <ol className="space-y-6">
            <li className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-blue-700 dark:text-blue-300">
                1. Download the Pack
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Find the pack you wish to download from the available categories
                on the site. Click the download button next to the corresponding
                pack. Make sure you download one of the correct file formats
                listed above.
              </p>
            </li>
  
            <li className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-100 dark:border-purple-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-purple-700 dark:text-purple-300">
                2. Import the Pack
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Check your downloads folder for your pack. Once you find it,
                double-click to begin the import process. Alternatively, you can
                right-click the file, select "Open with," and choose the version
                of Bedrock you wish to import it to, such as Release or Preview.
              </p>
            </li>
  
            <li className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg p-4 border border-emerald-100 dark:border-emerald-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-emerald-700 dark:text-emerald-300">
                3. Import Confirmation
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                The file will now be imported into Minecraft. You'll hear a
                notification sound and see "Import started..." at the top of the
                screen. When the import is complete, it will display "Successfully
                imported."
              </p>
            </li>
          </ol>
        </section>
  
        <section className="space-y-4">
          <h4 className="text-xl font-medium text-primary-600 dark:text-primary-400">
            Activation Instructions
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-rose-50 to-orange-50 dark:from-rose-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-rose-100 dark:border-rose-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-rose-700 dark:text-rose-300">
                Add-Ons/Resource Packs
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Go to the create/edit world screen. Click on "Resource Packs" or
                "Behaviour Packs," select "Available," and press "Activate."
                Add-Ons usually require both a behavior and resource pack.
              </p>
            </div>
  
            <div className="bg-gradient-to-r from-cyan-50 to-sky-50 dark:from-cyan-900/20 dark:to-sky-900/20 rounded-lg p-4 border border-cyan-100 dark:border-cyan-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-cyan-700 dark:text-cyan-300">
                Worlds
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                Your imported world should appear immediately on the worlds
                screen. Just ensure the import process is complete before opening
                the world.
              </p>
            </div>
  
            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-900/20 dark:to-fuchsia-900/20 rounded-lg p-4 border border-violet-100 dark:border-violet-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-violet-700 dark:text-violet-300">
                Skins
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                On the main title screen, click on "Dressing Room," then press
                "Classic Skins" (which looks like a clothes hanger), and you will
                see your new skin pack.
              </p>
            </div>
          </div>
        </section>
  
        <section className="space-y-4">
          <h4 className="text-xl font-medium text-primary-600 dark:text-primary-400">
            Troubleshooting Guide
          </h4>
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-amber-700 dark:text-amber-300">
                Duplicate Pack Detected
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                This error occurs when the pack you're trying to import is already
                installed. Delete the old version first from Settings → Storage →
                select the pack → delete button (Trash Can).
              </p>
            </div>
  
            <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-red-200 dark:border-red-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-red-700 dark:text-red-300">
                General Import Error
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                This occurs when Minecraft doesn't specify a reason for the
                failure. This can happen due to various issues, such as a missing
                pack manifest. Contact the creator for support if needed.
              </p>
            </div>
  
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-orange-700 dark:text-orange-300">
                Not a Valid Zip Archive
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                This can occur due to corruption during download or improper pack
                creation. Try manual installation or contact the creator for
                support.
              </p>
            </div>
  
            <div className="bg-gradient-to-r from-yellow-50 to-lime-50 dark:from-yellow-900/20 dark:to-lime-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800/50 transition-all duration-300 hover:shadow-md">
              <h5 className="font-medium mb-2 text-yellow-700 dark:text-yellow-300">
                .zip File Handling
              </h5>
              <p className="text-gray-600 dark:text-gray-300">
                If you receive a .zip file, either right-click the download button
                and "Save Link As" with the correct extension (.mcpack/.mcworld),
                or rename the downloaded file to change the extension from .zip to
                .mcpack.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
   