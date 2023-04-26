import { SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Home = () => {
	return (
		<div>
			<SignInButton afterSignInUrl={(useRouter().query.redirect as string) || "/"} />
		</div>
	);
};

export default Home;

// User Needs to be authed to reach any route on this site.
// app.spectra.com/communityUId/applicaitonId
