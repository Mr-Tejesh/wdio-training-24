describe("fiirst test", () => {
  it("tap on menu", async () => {
    await $("~open menu").click();
    await driver.pause(5000);
  });
});
