const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const {
      items,
      totalAmount,
      shippingAddress,
    } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    if (
      !shippingAddress?.fullName ||
      !shippingAddress?.phone ||
      !shippingAddress?.address ||
      !shippingAddress?.city ||
      !shippingAddress?.state ||
      !shippingAddress?.pincode
    ) {
      return res.status(400).json({
        message: "Please fill all shipping details",
      });
    }

    const order = await Order.create({
      user: req.user._id,
      items,
      totalAmount,
      shippingAddress,
    });

    res.status(201).json({
      message: "Order placed successfully",
      order,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not place order",
    });
  }
};


const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    res.status(200).json(orders);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Could not fetch orders",
    });
  }
};


module.exports = {
  createOrder,
  getMyOrders,
};