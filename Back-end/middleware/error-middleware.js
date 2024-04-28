const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Backend error";
    const msg = err.extraDetails || "Error from Backend";
    return res.status(status).json({message, msg});
};

module.exports = errorMiddleware;