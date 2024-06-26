"use client"

import { ReactNode } from "react"

/* import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react"; */
/* import { Crisp } from "crisp-sdk-web";
import { SessionProvider } from "next-auth/react"; */
import NextTopLoader from "nextjs-toploader"
import { Toaster } from "react-hot-toast"
/* import config from "@/config"; */
import { ParallaxProvider } from "react-scroll-parallax"
import { Tooltip } from "react-tooltip"

// Crisp customer chat support:
// This component is separated from ClientLayout because it needs to be wrapped with <SessionProvider> to use useSession() hook
/* const CrispChat = (): null => {
	const pathname = usePathname();
	const { data } = useSession();

	useEffect(() => {
		if (config?.crisp?.id) {
			// Set up Crisp
			Crisp.configure(config.crisp.id);

			// (Optional) If onlyShowOnRoutes array is not empty in config.js file, Crisp will be hidden on the routes in the array.
			// Use <AppButtonSupport> instead to show it (user clicks on the button to show Crisp—it cleans the UI)
			if (
				config.crisp.onlyShowOnRoutes &&
				!config.crisp.onlyShowOnRoutes?.includes(pathname)
			) {
				Crisp.chat.hide();
				Crisp.chat.onChatClosed(() => {
					Crisp.chat.hide();
				});
			}
		}
	}, [pathname]);

	// Add User Unique ID to Crisp to easily identify users when reaching support (optional)
	useEffect(() => {
		if (data?.user && config?.crisp?.id) {
			Crisp.session.setData({ userId: data.user?.id });
		}
	}, [data]);

	return null;
}; */

// All the client wrappers are here (they can't be in server components)
// 1. SessionProvider: Allow the useSession from next-auth (find out if user is auth or not)
// 2. NextTopLoader: Show a progress bar at the top when navigating between pages
// 3. Toaster: Show Success/Error messages anywhere from the app with toast()
// 4. Tooltip: Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content=""
// 5. CrispChat: Set Crisp customer chat support (see above)
const ClientLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            {/* <SessionProvider> */}
            {/* Show a progress bar at the top when navigating between pages */}
            <NextTopLoader color={"#fb923c"} showSpinner={true} />

            {/* Content inside app/page.js files  */}
            <ParallaxProvider scrollAxis="vertical">{children}</ParallaxProvider>

            {/* Show Success/Error messages anywhere from the app with toast() */}
            <Toaster
                toastOptions={{
                    duration: 3000, // 3 seconds
                }}
            />

            {/* Show tooltips if any JSX elements has these 2 attributes: data-tooltip-id="tooltip" data-tooltip-content="" */}
            <Tooltip id="tooltip" className="z-[60] !opacity-100 max-w-sm shadow-lg" />

            {/* Set Crisp customer chat support */}
            {/* <CrispChat />
			</SessionProvider> */}
        </>
    )
}

export default ClientLayout
