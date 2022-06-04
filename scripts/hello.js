
const main = async () => {
	const owner = await hre.ethers.getSigners();
	const helloContractFactory = await hre.ethers.getContractFactory("Hello");
	const helloContract = await helloContractFactory.deploy();

	helloContract.deployed();

	console.log("hello deployed to ", helloContract.address);
	console.log("Contract deployed by", owner.address)

	let waveCount;
	waveCount = await helloContract.totalWaves();

	let wave;
	wave = await helloContract.wave();
	await wave.wait();

	waveCount = await helloContract.totalWaves();
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