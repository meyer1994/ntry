const Migrations = artifacts.require("Migrations")
const Sum = artifacts.require("Sum")

module.exports = async deployer => {
    deployer.deploy(Migrations)
    deployer.deploy(Sum)
}
