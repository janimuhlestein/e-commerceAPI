const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: {
      model: Product,
      attributes: ['product_name', 'price']
    }
  })
  .then(dbCategoryData=> {
    res.json(dbCategoryData);
  })
  .catch(err=>{
    console.log(err);
    res.json(err);
  });
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['product_name', 'price']
    }
  })
  .then(dbCategoryData=> {
    if(!dbCategoryData) {
      res.status(404).json({message: 'There is no category with that id.'});
      return;
    }
    res.json(dbCategoryData);
  });
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name
  })
  .then(dbCategoryData=>{
    res.json(dbCategoryData);
  });
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body,
    {
    where: {
      id: req.params.id
    }
  }
  )
  .then(dbCategoryData=> {
    if(!dbCategoryData) {
      res.status(404).json({message: 'No category found with this id.'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err=>{
    console.log(err);
    res.status(500).json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(dbCategoryData=> {
    if(!dbCategoryData) {
      res.status(404).json({message: 'No Category found with that id.'});
      return;
    }
    res.json(dbCategoryData);
  })
  .catch(err=> {
    console.log(err);
    res.status(500).json(err);
  });

});

module.exports = router;
