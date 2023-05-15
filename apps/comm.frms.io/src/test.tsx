import React, { useState, useEffect } from "react";
import useSWR from "swr";

interface TestProps {}

/**
 * @description
 * @return {React.FC<Test>}
 */
const Test: React.FC<TestProps> = (props) => {
	const { data } = useSWR("/api/v1/comm");

	return <div></div>;
};

export default Test;
