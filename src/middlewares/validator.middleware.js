//Validacion authSchema

export const validateSchema = (schema) => (req, res, next) => {
    try {
      schema.parse(req.body);
      next();  
    } catch (error) {
        return res
        .status(400)

        //simplificamos el mensaje de error que nos devuelve
        .json({ error: error.errors.map(err => err.message)
        });
    }
}