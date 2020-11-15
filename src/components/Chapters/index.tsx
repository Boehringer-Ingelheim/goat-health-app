import React from 'react';
import { connect } from 'react-redux';
import { Chapter0101, Chapter0102, Chapter0103, Chapter0104 } from './01';

import './index.css';

interface ContainerProps {
  id: string;
  subId: string;
}

const getChapterContentById = (chapterId: string) => {
  switch (chapterId) {
    case '0101':
      return <Chapter0101 />;
    case '0102':
      return <Chapter0102 />;
    case '0103':
      return <Chapter0103 />;
    case '0104':
      return <Chapter0104 />;
    default:
      return <div>Not Implemented Chapter {chapterId}</div>;
  }
};

const Chapters: React.FC<ContainerProps> = (props) => {
  const { id, subId } = props;

  const chapterId = `${id}${subId}`;

  return <>{getChapterContentById(chapterId)}</>;
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapters);
