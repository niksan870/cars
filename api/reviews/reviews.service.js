const carBrand = require("../../models/carBrand");
const carModel = require("../../models/carModel");
const generationsModel = require("../../models/generationsModel");
const variationsExtendedProperties = require("../../models/variationsExtendedProperties");

module.exports = {
  getCarBrands,
  getCarModels,
  getCarModelGeneration,
  getCarModelVariationByGeneration,
  getFinalCar
};

async function getCarBrands() {
  try {
    const cars = await carBrand.find({}, { title: 1 }, { sort: { title: 1 } });
    const result = cars.map(car => {
      return {
        label: car.title,
        value: car.title
      };
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getCarModels(brandName) {
  try {
    const { _id } = await carBrand.findOne({ title: brandName }, null, {
      sort: { title: 1 }
    });
    const models = await carModel.find(
      { brand: _id },
      { title: 1 },
      { sort: { title: 1 } }
    );
    const result = models.map(model => {
      return {
        label: model.title,
        value: model.title
      };
    });
    return result;
  } catch (error) {
    throw error;
  }
}

async function getCarModelGeneration(brandName, modelName) {
  try {
    const { _id } = await carBrand.findOne({ title: brandName }, null, {
      sort: { title: 1 }
    });
    const models = await carModel.find({ brand: _id, title: modelName });
    const generations = await generationsModel.find({
      carModel: models[0]._id
    });
    return generations;
  } catch (error) {
    throw error;
  }
}

async function getCarModelVariationByGeneration({
  brandName,
  modelName,
  generationName
}) {
  try {
    const { _id } = await carBrand.findOne({ title: brandName }, null, {
      sort: { title: 1 }
    });
    const models = await carModel.find({ brand: _id, title: modelName });
    const generations = await generationsModel.find({
      carModel: models[0]._id
    });
    const wtd = generations.map(res => {
      if (res.generations[0][0].name === generationName) {
        return res;
      }
    });

    var filtered = wtd.filter(function(el) {
      return el != null;
    });
    return filtered;
  } catch (error) {
    throw error;
  }
}

async function getFinalCar({
  brandName,
  modelName,
  generationName,
  engineName,
  urlPiece
}) {
  try {
    let resultStrigified, final;
    const { _id } = await carBrand.findOne({ title: brandName }, null, {
      sort: { title: 1 }
    });
    const models = await carModel.find({ brand: _id, title: modelName });
    const generations = await generationsModel.find({
      carModel: models[0]._id
    });
    const wtd = generations.filter(
      res => res.generations[0][0].name === generationName
    );

    const result = await variationsExtendedProperties.find({
      generationId: wtd[0]._id,
      title: engineName
    });
    for (let i = 0; i < result.length; i++) {
      resultStrigified = {};
      resultStrigified = JSON.stringify(result[i]);
      if (JSON.parse(resultStrigified).link.includes(urlPiece)) {
        final = JSON.parse(resultStrigified);
      }
    }

    return final;
  } catch (error) {
    throw error;
  }
}
