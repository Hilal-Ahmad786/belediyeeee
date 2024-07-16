// pages/api/submit.js
import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({
  storage: multer.diskStorage({
    destination: './public/uploads',
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Sorry, something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single('file'));

apiRoute.post((req, res) => {
  const data = req.body;
  const file = req.file;

  console.log('Form data received:', data);
  console.log('File received:', file);

  res.status(200).json({ message: 'Form and file submitted successfully', data, file });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};


