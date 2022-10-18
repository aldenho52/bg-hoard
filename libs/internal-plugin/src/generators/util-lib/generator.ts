import {
  formatFiles,
  Tree,
} from '@nrwl/devkit';
import { UtilLibGeneratorSchema } from './schema';
import { libraryGenerator } from '@nrwl/workspace/generators';

export default async function (tree: Tree, options: UtilLibGeneratorSchema) {
  console.log('options', options);
  console.log('tree', tree);
  await libraryGenerator(tree, {
    name: `util-${options.name}`,
    directory: options.directory,
    tags: `type:util, scope:${options.directory}`,
  });
  await formatFiles(tree);
}
