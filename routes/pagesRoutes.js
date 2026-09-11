import { Router } from 'express';
import {
  getPages,
  getPageByIdOrSlug,
  createPage,
  updatePage,
  deletePage,
  togglePage,
} from '../controllers/pagesController.js';

const router = Router();

router.get('/', getPages);
router.get('/:slugOrId', getPageByIdOrSlug);
router.post('/', createPage);
router.put('/:id', updatePage);
router.delete('/:id', deletePage);
router.patch('/:id/toggle', togglePage);

export default router;
