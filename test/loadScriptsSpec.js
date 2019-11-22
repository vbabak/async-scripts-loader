describe('async-scripts-loader', () => {

  it('should load single script correctly', async function (done) {
    await loadScriptAsync('/base/test/stubs/alice.js').catch((e) => {
      done.fail(e);
    });
    expect(Alice).toBeTrue();
    done();
  });

  it('should load multiple scripts correctly', async function (done) {
    await loadScriptAsync(['/base/test/stubs/alice.js', '/base/test/stubs/bob.js']).catch((e) => {
      done.fail(e);
    });
    expect(Alice).toBeTrue();
    expect(Bob).toBeTrue();
    done();
  });

  it('should throw error', async function (done) {
    const res = await loadScriptAsync('/base/test/stubs/conny.js').catch((e) => {
      return e;
    });
    expect(res).toBeInstanceOf(Error);
    done();
  });

});
