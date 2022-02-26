import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

export default function FolderList(props) {
  return (
    <List sx={{ width: "100%", bgcolor: "#15202b" }}>
      {props.tourny.length === 0 && (
        <ListItem
          sx={{
            cursor: "pointer",
            margin: "10px 0",
            border: "1px solid rgba(0, 0, 0, 0.3);",
          }}
        >
          <ListItemAvatar>
            <Avatar>
              <EmojiEventsIcon sx={{ color: "white" }} />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            sx={{ color: "white" }}
            primary={
              <Typography style={{ color: "#b8bcbf83" }}>
                No Tournaments Yet
              </Typography>
            }
          />
        </ListItem>
      )}
      {props.mode === "mine" ? (
        <>
          {props.tourny.map((item, index) => (
            <Link
              key={item._id}
              to={`/tournament/view/${item.tournamentid}`}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                sx={{
                  cursor: "pointer",
                  margin: "10px 0",
                  border: "1px solid rgba(0, 0, 0, 0.3);",
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEventsIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography style={{ color: "#b8bcbf83" }}>
                      {item.tournamentname}
                    </Typography>
                  }
                  secondary={
                    <Typography style={{ color: "#b8bcbf83" }}>
                      {item.tournamentdate}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))}
        </>
      ) : (
        <>
          {props.tourny.map((item, index) => (
            <Link
              key={item._id}
              to={`/tournament/view/${item.tournamentid}`}
              style={{ textDecoration: "none" }}
            >
              <ListItem
                sx={{
                  cursor: "pointer",
                  margin: "10px 0",
                  border: "1px solid rgba(0, 0, 0, 0.3);",
                }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <EmojiEventsIcon sx={{ color: "white" }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ color: "white" }}
                  primary={
                    <Typography style={{ color: "#b8bcbf83" }}>
                      {item.name}
                    </Typography>
                  }
                  secondary={
                    <Typography style={{ color: "#b8bcbf83" }}>
                      {item.date}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          ))}
        </>
      )}
    </List>
  );
}
