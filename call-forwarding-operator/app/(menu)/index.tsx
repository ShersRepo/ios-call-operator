import {ReactElement} from 'react';
import UserSetup from "@/components/user-account/user-setup";
import {ParallaxHeaderWrapper} from "@/components/theme/parallax-header-wrapper";

export default function Index(): ReactElement {
	const userIsSignedIn = false;

	return (
		<ParallaxHeaderWrapper>

			{userIsSignedIn &&
                <div>Sat Sri Akaal!</div>
			}

			{
				!userIsSignedIn &&
                <UserSetup/>
			}
		</ParallaxHeaderWrapper>
	);

}
