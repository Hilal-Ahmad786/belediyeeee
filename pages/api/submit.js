import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        res.status(500).json({ error: 'Failed to parse form data' });
        return;
      }

      // Log fields and files to check what data is being received
      console.log('Fields:', fields);
      console.log('Files:', files);

      // Handle your form data here

      res.status(200).json({ message: 'Form submitted successfully!' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
