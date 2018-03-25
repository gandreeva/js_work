let options = {
    template: 'h:m:s',
    precision: 10000,
    test: "Testing function"
  };


  let { precision=1000, test } = options;

  options["any"] = "Any values";

 let plainObj = {};

  function test_template( { template, any } ) {
    this._template = template;
    console.log(this._template);
    console.log(test);
    console.log(any);
  };

  console.log(precision);



  test_template (plainObj);