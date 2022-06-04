
const main = async () => {
	const helloContractFactory = await hre.ethers.getContractFactory("Hello");
	const helloContract = await helloContractFactory.deploy();

	helloContract.deployed();

	console.log("hello deployed to ", helloContract.address);
};


const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();