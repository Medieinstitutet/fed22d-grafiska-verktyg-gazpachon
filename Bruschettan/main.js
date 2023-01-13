import './styles/style.scss';

const path1 = document.querySelector('#path-1');
const path2 = document.querySelector('#path-2');
const path3 = document.querySelector('#path-3');
const path4 = document.querySelector('#path-4');
const path5 = document.querySelector('#path-5');

const path1d = 'M0 424L129 375L257 441L386 406L514 384L643 383L771 448L900 428L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path2d = 'M0 463L129 465L257 431L386 409L514 413L643 456L771 459L900 396L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path3d = 'M0 493L129 425L257 502L386 445L514 511L643 490L771 441L900 482L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path4d = 'M0 500L129 536L257 510L386 513L514 496L643 508L771 484L900 506L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';
const path5d = 'M0 558L129 530L257 558L386 550L514 543L643 569L771 563L900 538L900 601L771 601L643 601L514 601L386 601L257 601L129 601L0 601Z';

gsap.to(path1, { duration: 1, attr: {d: path1d}, yoyo: true, repeat: -1 });
gsap.to(path2, { duration: 1, attr: {d: path2d}, yoyo: true, repeat: -1, delay: 0.3 });
gsap.to(path3, { duration: 1, attr: {d: path3d}, yoyo: true, repeat: -1 })
gsap.to(path4, { duration: 1, attr: {d: path4d}, yoyo: true, repeat: -1, delay: 0.3 });
gsap.to(path5, { duration: 1, attr: {d: path5d}, yoyo: true, repeat: -1 });